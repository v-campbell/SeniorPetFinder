class RemoveColumnFromPets < ActiveRecord::Migration[5.2]
  def change
    remove_column :pets, :type
  end
end
