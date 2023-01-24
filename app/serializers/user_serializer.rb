class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio, :image, :fav_genre, :fav_song_id
end
