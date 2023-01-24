class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :genre, :link
end
