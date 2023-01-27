class LikesController < ApplicationController

    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    def destroy
        like = Like.find_by(like_params)
        like.destroy!
        head :no_content
    end

    private

    def like_params
        params.permit(:user_id, :song_id)
    end

end




# def create
#     if already_liked?
#         flash[:notice] = "You can't like more than once"
#     else
#         @song.likes.create(user_id: current_user.id)
#     end
#     redirect_to_song_path(@song)

# def destroy
#     if !(already_liked?)
#         flash[:notice] = "Cannot unlike"
#     else
#         @like.destroy
#     end
#     redirect_to_song_path(@song)
# end

# private

# def find_song
#     @song = Song.find_by(params[:id]))
# end

# def already_liked?
#     Like.where(user_id: current_user.id, song_id:
#     params[:song_id]).exists?
# end

# def find_like
#     @like = @song.likes.find(params[:id])
# end
# end
