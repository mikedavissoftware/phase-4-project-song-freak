class SongsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        songs = Song.all
        render json: songs
    end

    def show
        song = set_song
        render json: song
    end

    def create
        song = Song.create!(song_params)
        render json: song, status: :created

    end

    def update
        song = set_song
        song.update!(song_params)
        render json: song
    end

    private

    def set_song
        Song.find(params[:id])
    end

    def song_params
        params.permit(:title, :artist, :genre, :link)
    end
end
