class HouseController < ApplicationController
  attr_accessor :current_user

  def index
    cookies[:auth_token] = params[:auth_token] if params[:auth_token].present?

    if cookies[:auth_token].present? && !request.headers['HTTP_AUTHORIZATION']
      request.headers['HTTP_AUTHORIZATION'] = "Token token=#{cookies[:auth_token]}"
    end

    authenticate

    username = current_user ? current_user.name : 'Unauthorized'

    render component: 'ApplicationBox', props: {
        authorized: current_user.present?,
        notifyUnauthorized: params[:auth_token].present?,
        username: username
    }
  end

  def ajax_set_coming
    current_user.set_coming!
  end

  protected

  def authenticate
    authenticate_with_http_token do |token, _|
      @current_user = User.find_by(auth_token: token)
      cookies[:auth_token] = current_user.auth_token if current_user
    end
  end
end