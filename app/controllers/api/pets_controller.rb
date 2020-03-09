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

    def adopt
        @pet = Pet.find(params[:id])
        # if no owner
        if !@pet.adopted_by 
            @pet.adopted_by = current_user.id
            render '/api/pets/show'
        else
            render json: ["Sorry, I'm already adopted"], status: 418
        end
    end

end
