class LikesController < ApplicationController

    before_action :find_post
    before_action :find_like, only: [:destroy]

    def create
        @song.likes.create(user_id: current_user.id)
        redirect_to_song_path(@song)
    end

    def destroy
        @like.destroy
        redirect_to_song_path(@song)
    end

    private

    def find_song
        @song = Song.find_by(params[:id]))
    end

    def already_liked?
        Like.where(user_id: current_user.id, song_id:
        params[:song_id]).exists?
    end

    def find_like
        @like = @song.likes.find(params[:id])
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
