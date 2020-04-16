class ChangeForeignKeysToIntegersInFavorites < ActiveRecord::Migration[5.2]
  def change
      change_column :favorites, :user_id, 'integer USING CAST(user_id AS integer)'
      change_column :favorites, :pet_id, 'integer USING CAST(pet_id AS integer)'
  end
end
