class User < ApplicationRecord
  has_many :likes, dependent: :destroy
  has_many :songs, through: :likes

  has_secure_password

  validates :username, presence: true, uniqueness: true
end
