class UserWithLikedSongsSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :bio, :image, :fav_genre, :fav_song_id
  has_many :songs
end
