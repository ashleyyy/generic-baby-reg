# Homepage (Root path)
get '/' do
  @items = Item.all
  erb :index
end

post '/items' do
  @item = Item.new(
    title: params[:title],
    purchased: params[:purchased],
    comments: params[:comments]
  )
  respond_to do |format|
    if @item.save
      format.html{render @item}
      format.json{render json: @item}
    else 
      format.html { render action: "new" }
      format.json { render json: @item.errors.full_messages}
    end
  end
end

put '/items/:id' do
  @item = Item.find_by(id: params[:id])
  @item.purchased = params[:purchased]
    if @item.save
      @item.to_json
    end
end