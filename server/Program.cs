using Microsoft.EntityFrameworkCore;
using ShoppingList.Database;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ShoppingListDb>(options => {
    options.UseSqlServer("Server=tcp:shopping-list-db.database.windows.net,1433;Initial Catalog=shopping-list-db;Persist Security Info=False;User ID=nick;Password={password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
});

builder.Services.AddSwaggerDocument(settings => {
    settings.Title = "Test REST";
});

var app = builder.Build();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("https://shopping-list-app.azurewebsites.net");
        });
});

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.UseOpenApi();
app.UseSwaggerUi();

app.Run();
