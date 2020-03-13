class AddSlugToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :slug, :string
    add_index :pets, :slug, unique: true
  end
end
