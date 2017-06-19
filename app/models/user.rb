class User < ApplicationRecord

  validates :name,
            :email, presence: true

  has_many :inquiries, dependent: :nullify
  has_many :user_settings, dependent: :nullify
end
