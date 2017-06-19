class CreateInquiries < ActiveRecord::Migration[5.1]
  def change
    create_table :inquiries do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :sales_rep, null: false
      t.timestamps
    end
  end
end
