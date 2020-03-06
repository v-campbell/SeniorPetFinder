class PetsController < ApplicationController
    # before_action :require_logged_in TO ADOPT? HOW TO ADOPT?

    def index
        @pets = Pet.all
        render '/api/pets/index'
    end

    def show
        @pet = Pet.find(params[:id])
        if @pet
            # render :show
            render '/api/pets/show'
        else
            render json: @pet.errors.full_messages, status: 418
        end
    end

end
