Rails.application.routes.draw do
  resources :likes, only: [:create, :destroy]
  resources :songs, only: [:index, :show, :create, :update]
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "sessions#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/me", to: "users#update"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
