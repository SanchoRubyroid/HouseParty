Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'house#index'

  get '/:auth_token', to: 'house#index'
  get '/set_coming', to: 'house#ajax_set_coming'
end
