class Inquiry < ApplicationRecord

  validates :name,
            :address,
            :sales_rep, presence: true


end
