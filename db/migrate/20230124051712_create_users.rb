class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :bio
      t.string :image
      t.string :fav_genre
      t.integer :fav_song_id

      t.timestamps
    end
  end
end
