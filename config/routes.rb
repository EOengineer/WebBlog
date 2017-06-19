Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "home", to:'home#index', as: "home"

  get "inquiries", to: 'inquiries#index', as: "inquiries"
end
