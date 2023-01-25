class ApplicationController < ActionController::Base
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize
  skip_forgery_protection

  private

  def render_not_found(invalid)
    render json: {error: "#{invalid.model} not found"}, status: :not_found
  end

  def render_invalid(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors:exception.record.errors.full_messages}, status: :unprocessable_entity
  end

  def authorize
    @current_user = User.find_by(id:session[:user_id])
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end

end
