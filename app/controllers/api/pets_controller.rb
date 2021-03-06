class Api::PetsController < ApplicationController
    # before_action :require_logged_in 

    def index
        @pets = Pet.fetch(params[:maxId])
    end

    def show
        # to avoid N+1 queries from Active Storage
        @favorites = current_user.favorited_pets
        @pet = Pet.with_attached_photos.find(params[:id])
    end

    def adopt
        @pet = Pet.find(params[:id])
        # if no owner
        if !@pet.adopted_by 
            @pet.adopted_by = current_user.id
            # current_user.pet_ids.push(@pet.id)
            @pet.save!
            render '/api/pets/show'
        else
            render json: ["Sorry, I'm already adopted"], status: 418
        end
    end

    def unadopt
        @pet = Pet.find(params[:id])
        # if owner
        if @pet.adopted_by 
            @pet.adopted_by = nil
            # current_user.pet_ids.push(@pet.id)
            @pet.save!
            render '/api/pets/show'
        else
            render json: ["Sorry, you can't unadopt a pet you don't own"], status: 419
        end
    end

    def users_pets
        @pets = Pet.where(adopted_by: params[:user_id])

    end

end
