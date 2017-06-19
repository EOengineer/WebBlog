class InquiriesController < ApplicationController
  def index
    @inquiries = Inquiry.all

    respond_to do |format|

      format.html # show.html.erb
      format.json { render json: @inquiries }

    end
  end
end
