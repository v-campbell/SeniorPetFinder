class Api::PetsController < ApplicationController
    # before_action :require_logged_in 
    # TO ADOPT? HOW TO ADOPT?

    def index
        @pets = Pet.all
    end

    def show
        # to avoid N+1 queries from Active Storage
        @pet = Pet.with_attached_photos.find(params[:id])
    end

end
