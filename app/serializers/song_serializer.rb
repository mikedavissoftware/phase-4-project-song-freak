class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre, :link
  has_many :users
end
