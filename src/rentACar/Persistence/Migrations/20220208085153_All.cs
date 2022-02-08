using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class All : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    No = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RentalStratDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RentalEndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TotalRentalDate = table.Column<short>(type: "smallint", nullable: false),
                    RentalPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Invoices_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Invoices",
                columns: new[] { "Id", "CreatedDate", "CustomerId", "No", "RentalEndDate", "RentalPrice", "RentalStratDate", "TotalRentalDate" },
                values: new object[] { 1, new DateTime(2022, 2, 8, 0, 0, 0, 0, DateTimeKind.Local), 2, "152646", new DateTime(2022, 2, 10, 0, 0, 0, 0, DateTimeKind.Local), 100m, new DateTime(2022, 2, 8, 0, 0, 0, 0, DateTimeKind.Local), (short)3 });

            migrationBuilder.CreateIndex(
                name: "IX_Invoices_CustomerId",
                table: "Invoices",
                column: "CustomerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Invoices");
        }
    }
}
