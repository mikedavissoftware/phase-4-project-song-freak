class Song < ApplicationRecord
  has_many :likes
  has_many :users, through: :likes

validates :title, presence: true
validates :artist, presence: true
validates :genre, presence: true
validates :link, presence: true, inclusion: { in: %w(https://open.spotify.com/track/)}
end
