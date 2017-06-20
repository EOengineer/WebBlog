class UserSetting < ApplicationRecord
  validates :title,
            :key,
            :settings, presence: true

  belongs_to :user
end
