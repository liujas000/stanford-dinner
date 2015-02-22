class VoteController < ApplicationController
  def index
    puts("THIS IS A STRING THAT I AM PUTTING")
    @hall = Hall.find(params[:hall_id])
    vote_val = params[:vote]
    puts(vote_val)
  end
end
