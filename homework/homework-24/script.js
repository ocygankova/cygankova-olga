function f1() {
    document.getElementById('out1').textContent = document.getElementById('name').value;
    document.getElementById('name').value = '';

    document.getElementById('out2').textContent = document.getElementById('surname').value;
    document.getElementById('surname').value = '';

    document.getElementById('out3').textContent = document.getElementById('age').value;
    document.getElementById('age').value = '';

    document.getElementById('out4').textContent = document.getElementById('city').value;
    document.getElementById('city').value = '';

    document.getElementById('out5').textContent = document.getElementById('job').value;
    document.getElementById('job').value = '';
}
document.getElementById('send').onclick = f1;