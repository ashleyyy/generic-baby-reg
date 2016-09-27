class AddItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.boolean :purchased
      t.string :comments
      t.string :url
      t.timestamps
    end
  end
end
