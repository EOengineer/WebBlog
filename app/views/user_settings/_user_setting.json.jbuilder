json.extract! user_setting, :id, :key, :user_id, :settings, :default, :created_at, :updated_at
json.url user_setting_url(user_setting, format: :json)
