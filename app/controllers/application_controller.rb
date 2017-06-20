class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  before_action :authenticate

  attr_accessor :current_user

  protected

  def authenticate
    authenticate_or_request_with_http_token do |token, _|
      @current_user = User.find_by(auth_token: token)
    end
  end
end
