<script>
              document.getElementById('contact-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const form = this;
                const formData = new FormData(form);

                fetch(form.action, {
                  method: form.method,
                  body: formData,
                  headers: {
                    'Accept': 'application/json'
                  }
                }).then(response => {
                  if (response.ok) {
                    document.getElementById('form-message').innerHTML = "<p>Thank you! Your message has been sent.</p>";
                    form.reset();
                  } else {
                    response.json().then(data => {
                      document.getElementById('form-message').innerHTML = "<p>Oops! Something went wrong.</p>";
                    });
                  }
                }).catch(error => {
                  document.getElementById('form-message').innerHTML = "<p>Network error. Please try again later.</p>";
                });
              });
            </script>