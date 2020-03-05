class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.string :breed, null: false
      t.integer :age, null: false
      t.string :sex, null: false
      t.string :size, null: false
      t.text :about, null: false
      t.integer :adopted_by

      t.timestamps
    end
  end
end
