class CreateHalls < ActiveRecord::Migration
  def change
    create_table :halls do |t|
      t.string :name
      t.string :img
      t.integer :score

      t.timestamps null: false
    end
  end
end
