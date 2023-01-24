class User < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :songs, through: :likes
end
