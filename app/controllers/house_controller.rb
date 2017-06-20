class HouseController < ApplicationController
  def index
    render json: {logged_in_user: current_user.name}, status: 200
  end
end