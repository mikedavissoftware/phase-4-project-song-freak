class UsersController < ApplicationController
    #May not want this when you introduce Auth, keep an eye on it
    # skip_before_action :verify_authenticity_token
    def index
        users = User.all
        render json: users
    end

    def show
        user = set_user
        render json: user, serializer: UserWithLikedSongsSerializer
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = User.update!(user_params)
        render json: user, status: :updated
    end

    def destroy
        user = set_user
        user.destroy
        head :no_content
    end

    private

    def set_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :age, :bio, :image, :fav_genre, :fav_song_id)
    end
end
