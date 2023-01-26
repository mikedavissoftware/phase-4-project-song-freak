class SongWithLikesSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre, :link
  has_many :likes
end
