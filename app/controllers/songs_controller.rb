class SongsController < ApplicationController

    def index
        songs = Song.all
        render json: songs
    end

    def show
        song = set_song
        render json: song
    end

    def create

    end

    def update
        
    end

    def set_song
        Song.find(params[:id])
    end
end
