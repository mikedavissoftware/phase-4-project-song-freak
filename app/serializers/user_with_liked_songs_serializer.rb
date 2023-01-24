class UserWithLikedSongsSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio, :image, :fav_genre, :fav_song_id
  has_many :songs
end
