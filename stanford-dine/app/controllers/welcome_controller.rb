class WelcomeController < ApplicationController
  def index
    @halls = Hall.all
  end

  def vote
    @hall = Article.find(params[:hall_id])
    vote_val = params[:vote]; 
    puts(vote_val);
  end
end