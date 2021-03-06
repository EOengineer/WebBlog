Rails.application.routes.draw do
  resources :user_settings
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "home", to:'home#index', as: "home"

  get "inquiries", to: 'inquiries#index', as: "inquiries"

  get "user-settings", to: 'user_settings#index'

  get "user-settings/default", to: 'user_settings#default'
end
