class Api::FavoritesController < ApplicationController
  def index 
    @favorites = Favorite.where(user_id: params[:user_id])
    # @favorites = Favorite.find_by(user_id: params[:user_id])
    render :index
  end

  def create 
    @favorite = Favorite.create(favorites_params)
    @favorite.user_id = current_user.id

    # @favorite = Favorite.new
    # @favorite.user_id = current_user.id
    # @favorite.pet_id = params[:id]
    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 425
    end
  end

  def destroy
    @favorite = Favorite.where(pet_id: params[:id], user_id: params[:user_id])[0]
    # if @favorite.user_id === current_user.id
      Favorite.delete(@favorite)
    # else 
      # render json: ["You haven't added this pet to your favorite list yet"], status: 424
    # end
  end

  def favorites_params 
    params.require(:favorite).permit(:pet_id)
  end
end

