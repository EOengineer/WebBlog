class UserSetting < ApplicationRecord
  validates :key,
            :settings, presence: true

  belongs_to :user
end
