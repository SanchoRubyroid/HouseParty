class AddComingToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :coming, :boolean, default: false
  end
end
