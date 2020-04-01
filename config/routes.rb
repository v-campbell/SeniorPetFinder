Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:index, :create, :destroy]
    end 
    resource :session, only: [:create, :destroy]
    resources :pets, only: [:index, :show]
    patch 'pets/adopt/:id', :to => '/api/pets#adopt'
    delete 'pets/unadopt/:id', :to => '/api/pets#unadopt'
    get 'users/:user_id/pets', :to => '/api/pets#users_pets'

    # resources :favorites, only: [:index, :show, :create, :destroy]

  end
  
  

end
