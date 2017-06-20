class CreateUserSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :user_settings do |t|
      t.string :title
      t.string :key
      t.text :settings
      t.boolean :default
      t.integer :user_id

      t.timestamps
    end
  end
end
