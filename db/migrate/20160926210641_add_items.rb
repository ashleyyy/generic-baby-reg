class AddItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.boolean :purchased
      t.string :comments
      t.timestamps
    end
  end
end
