var counter = 1;
var counter2 = 1;
$(document).ready(function(){
    $(".add-type-btn").click(function(){
        counter++;
        counter2++;
        var html = '<div class="item-type-details">';
        html += '<div class="form-group">';
        html += '<label for="item-type-name-'+ counter + '">Item type Name</label>';
        html += '<input type="text" class="form-control" id="item-type-name-'+ counter + '" name="name'+counter+ '" placeholder="Give an item name"> required';
        html += '</div>';

        html += '<div class="form-group">'
        html += '<label for="item-type-weight-'+ counter + '">Weight</label>';
        html += '<input type="text" class="form-control" id="item-type-weight-'+ counter + '"name="weight'+counter+ '" placeholder="e.g. 200gm"> required';
        html += '</div>';

        html += '<div class="form-group">';
        html += '<label for="item-type-price-'+ counter + '">Price(in Tk)</label>';
        html += '<input type="text" class="form-control" id="item-type-price-'+ counter + '"name="price'+counter+ '" placeholder="e.g. 900"> required';
        html += '</div>'
        html += '<button class="add-item-type-delete-btn" onclick="removeType(this)">Delete</button>';
        html += '</div>'

        document.getElementsByClassName("add-item-submit")[0].remove();
        $(".create-item-form").append(html);

        document.getElementsByClassName("item-type-details-counter")[0].value = counter2;
        console.log(document.getElementsByClassName("item-type-details-counter")[0].value);

        var submitHtml = '<div class="form-group add-item-submit">';
        submitHtml += '<button type="submit" class="btn btn-primary add-item-submit-btn">Submit</button>';
        submitHtml += '</div>';

        $(".create-item-form").append(submitHtml);

    });
  });

function removeType(divTag){
    let numb = document.getElementsByClassName("item-type-details").length;
    if(numb > 1){
        divTag.parentNode.remove();
        counter2--;
        document.getElementsByClassName("item-type-details-counter")[0].value = counter2;
        console.log(document.getElementsByClassName("item-type-details-counter")[0].value);
    }
}