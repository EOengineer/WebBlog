class Inquiry < ApplicationRecord

  validates :name,
            :address,
            :sales_rep, presence: true

  belongs_to :user


end
